
'use client';
import { MantineProvider, Title, Center, List, Button, AppShell, Box, Text, MediaQuery } from '@mantine/core';
import { useRef, useState, useEffect } from 'react';
import Sidebar from './components/AudioCutterNavbar';
import WaveSurfer from 'wavesurfer.js'; 
import RegionsPlugin from 'wavesurfer.js/dist/plugins/regions.esm.js'
export default function Page() {
  const [file, setFile] = useState(null);
  const waveformRef = useRef(null);
  const waveSurferInstance = useRef(null);  
  const fileInputRef = useRef(null);
  const [navbarOpened, setNavbarOpened] = useState(false); 
  // Function to handle file selection
  const handleFileChange = (event) => {
    const selectedFile = event.target.files ? event.target.files[0] : null;
    if (selectedFile) {
      setFile(selectedFile);
    }
  };

  const handleBrowseClick = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  const togglePlayPause = () => {
    if (waveSurferInstance.current) {
      waveSurferInstance.current.playPause();
    }
  };

  useEffect(() => {
    // Create WaveSurfer instance when the file is selected
    if (file && waveformRef.current) {
      if (!waveSurferInstance.current) {
        waveSurferInstance.current = WaveSurfer.create({
          container: waveformRef.current,
          waveColor: '#b2b2b2',
          progressColor: '#665dc3',
          cursorColor: '#ffffff',
          barWidth: 2,
          height: 170,
          responsive: true,
          hideScrollbar: true,
        });
      }

      // Load the audio file into WaveSurfer
      const audioURL = URL.createObjectURL(file);
      waveSurferInstance.current.load(audioURL);

      waveSurferInstance.current.on('ready', () => {
        console.log("WaveSurfer audio ready to play");
      });

      waveSurferInstance.current.on('error', (err) => {
        console.error("WaveSurfer load error:", err);
      });
    }

    // Cleanup on component unmount
    return () => {
      if (waveSurferInstance.current) {
        waveSurferInstance.current.destroy();
      }
    };
  }, [file]); // Re-run when a new file is selected

  return (
    <MantineProvider 
      theme={{ defaultRadius: 'sm' }} 
      withGlobalStyles
      withNormalizeCSS
    >
      <AppShell
        padding="sm"
        navbar={{
          width: 100,
          breakpoint: 'sm',
        }}
        styles={(theme) => ({
          navbar: {
            backgroundColor: '#1c1c26',
            color: theme.white,
          },
        })}
      >
        <AppShell.Navbar>
          <Sidebar />
          {/* <MediaQuery largerThan="sm" styles={{ display: 'none' }}>
            <Sidebar />
          </MediaQuery> */}
        </AppShell.Navbar>
      </AppShell>
      <Center style={{ width: '100vw', height: '100vh', backgroundColor: '#17171e', display: "flex", flexDirection: "column" }}>
        {!file ? (
          <>
            <List style={{ display: "flex", listStyle: "none", gap: "40px", color: "white", fontSize: "30px" }}>
              <a href="#how-to-cut-audio" style={{ color: 'white', textDecoration: 'none' }}>
                <Title order={6}>HOW IT WORKS</Title>
              </a>
              <Title order={6}>JOINER</Title>
            </List>

            <Title order={1} style={{ color: 'white', marginTop: "38px", fontSize:"43px" }}>Audio Cutter</Title>

            <Title order={5} style={{ color: 'white', marginTop: "20px", textAlign: "center", fontSize: "24px", fontWeight:"400", padding: "0 30px" }}>
              Free editor to trim and cut any audio file online
            </Title>

            {/* Hidden FileInput */}
            <input
              ref={fileInputRef}
              type="file"
              style={{ display: 'none' }}
              accept="audio/*"
              onChange={handleFileChange}
            />

            {/* Button to trigger file upload */}
            <Button 
              variant="outline" 
              size="lg" 
              style={{
                marginTop: "30px", 
                backgroundColor: 'transparent', 
                color: 'white', 
                borderColor: '#665dc3', 
                borderRadius: "50px",
                fontSize: "18px", 
                padding: "12px 24px", 
              }}
              onClick={handleBrowseClick}
            >
              Browse my files
            </Button>
          </>
        ) : (
          <Box style={{ marginTop: '20px', width: '80%' }}>
            <Text style={{ color: 'white', marginBottom: '10px' }}>
              Selected file: {file.name}
            </Text>

            {/* Waveform container */}
            <div ref={waveformRef} style={{ width: '100%', height: '100px', backgroundColor: '#1c1c26', borderRadius: '8px' }} />

            {/* Play/Pause button */}
            <Button 
              variant="outline" 
              size="md" 
              style={{
                marginTop: "98px", 
                backgroundColor: 'transparent', 
                color: 'white', 
                borderColor: '#665dc3', 
                borderRadius: "50px",
                fontSize: "18px", 
                padding: "12px 24px", 
              }}
              onClick={togglePlayPause}
            >
              Play / Pause
            </Button>

            <Button 
              variant="outline" 
              size="md" 
              style={{
                marginLeft: "20px",
                marginTop: "98px", 
                backgroundColor: 'transparent', 
                color: 'white', 
                borderColor: '#665dc3', 
                borderRadius: "50px",
                fontSize: "18px", 
                padding: "12px 24px", 
              }}
              onClick={() => {/* Handle cut action */}}
            >
              Cut
            </Button>

            <Button 
              variant="outline" 
              size="md" 
              style={{
                marginLeft: "20px",
                marginTop: "98px", 
                backgroundColor: 'transparent', 
                color: 'white', 
                borderColor: '#665dc3', 
                borderRadius: "50px",
                fontSize: "18px", 
                padding: "12px 24px", 
              }}
              onClick={() => {/* Handle remove action */}}
            >
              Remove
            </Button>
          </Box>
        )}
      </Center>

      <Box style={{ overflowX: "hidden", backgroundColor: "#17171e", width: "100vw", padding: "30px" }}>
        <Title order={2} id="how-to-cut-audio" style={{ color: 'white', marginTop: "30px", marginLeft: "150px", fontWeight:"400", fontSize:"40px"}}>
          How to cut audio
        </Title>

        <Box 
          bg="#1c1c26" 
          my="md" 
          component="div" 
          style={{ marginLeft: "150px", padding: "20px", borderRadius: "8px" }}
        >
          <Title order={4} style={{ color: "white", marginBottom: "10px", fontWeight: 400, fontSize: "20px" }}>
            This app can be used to trim and/or cut audio tracks, remove audio fragments. Fade in and fade out your music easily to make the audio harmoniously.
          </Title>

          <Title order={4} style={{ display: 'block', marginTop: "20px", marginBottom: "10px", color: "white", fontWeight: 400, fontSize: "20px" }}>
            It is fast and easy to use. You can save the audio file in any format (codec parameters are configured).
          </Title>

          <Title order={4} style={{ display: 'block', marginTop: "20px", color: "white", fontWeight: 400, fontSize: "20px" }}>
            It works directly in the browser; no need to install any software, and it is available for mobile devices.
          </Title>
        </Box>


        <Title order={4} id="how-to-cut-audio" style={{ color: 'white', marginTop: "30px", marginLeft: "150px", fontWeight:"300", fontSize:"30px"}}>
         Privacy and Security Guranteed
        </Title>

        <Box 
          bg="#1c1c26" 
          my="md" 
          component="div" 
          style={{ marginLeft: "150px", padding: "20px", borderRadius: "8px" }}
        >
          <Title order={4} style={{ color: "white", marginBottom: "10px", fontWeight: 400, fontSize: "20px" }}>
          This is serverless app. Your files does not leave your device
          </Title>
</Box>

      </Box>
    </MantineProvider>
  );
}
