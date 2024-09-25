
// components/AudioCutterNavbar.js
import { AppShell, Text, ScrollArea, Group, Box } from '@mantine/core';
import { IconHome, IconSettings, IconUser, IconHelp } from '@tabler/icons-react';

const Sidebar = () => {
  return (
    <AppShell width={{ base: 300 }} p="sm" style={{ backgroundColor: '#1e1e2f' }}>
      {/* Top Section */}
      <AppShell.Section>
        <Text size="lg" weight={600} style={{ marginBottom: '20px', color: 'white' }}>
          <svg xmlns="http://www.w3.org/2000/svg" width="64" height="44" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path d="M4 8l16 0" />
            <path d="M4 16l16 0" />
          </svg>
        </Text>
      </AppShell.Section>

      {/* Scrollable Section */}
      <AppShell.Section grow component={ScrollArea} style={{ height: '500px', overflowY: 'auto' }}>
       
   <Group direction="column" spacing="xs" style={{ padding: '0px' }}>
     <Box component="a" href="#" style={{ display: 'flex', flexDirection: "column", alignItems: 'center', padding: '0px', color: 'white', textDecoration: 'none', '&:hover': { backgroundColor: '#f0f0f0' } }}>
       <IconHome size={20} stroke={1.5} />
       <Text style={{ marginLeft: '10px' }}>Home</Text>
     </Box>
     <Box component="a" href="#" style={{ display: 'flex', flexDirection: "column", alignItems: 'center', padding: '0px', color: 'white', textDecoration: 'none', '&:hover': { backgroundColor: '#f0f0f0' } }}>
       <IconUser size={20} stroke={1.5} />
       <Text style={{ marginLeft: '10px' }}>Profile</Text>
     </Box>
         <Box component="a" href="#" style={{ display: 'flex', flexDirection: "column", alignItems: 'center', padding: '0px', color: 'white', textDecoration: 'none', '&:hover': { backgroundColor: '#f0f0f0' } }}>
      <IconSettings size={20} stroke={1.5} />
       <Text style={{ marginLeft: '10px' }}>Setting</Text>
     </Box>
     <Box component="a" href="#" style={{ display: 'flex', flexDirection: "column", alignItems: 'center', padding: '8px', color: 'white', textDecoration: 'none', '&:hover': { backgroundColor: '#f0f0f0' } }}>
       <IconHelp size={20} stroke={1.5} />
       <Text style={{ marginLeft: '10px' }}>Help</Text>
     </Box>

     <Box component="a" href="#" style={{ display: 'flex', flexDirection: "column", alignItems: 'center', padding: '0px', color: 'white', textDecoration: 'none', '&:hover': { backgroundColor: '#f0f0f0' } }}>
       <IconHome size={20} stroke={1.5} />
       <Text style={{ marginLeft: '10px' }}>Home</Text>
    </Box>

     <Box component="a" href="#" style={{ display: 'flex', flexDirection: "column", alignItems: 'center', padding: '0px', color: 'white', textDecoration: 'none', '&:hover': { backgroundColor: '#f0f0f0' } }}>
       <IconUser size={20} stroke={1.5} />
      <Text style={{ marginLeft: '10px' }}>Profile</Text>
     </Box>

     <Box component="a" href="#" style={{ display: 'flex', flexDirection: "column", alignItems: 'center', padding: '8px', color: 'white', textDecoration: 'none', '&:hover': { backgroundColor: '#f0f0f0' } }}>
      <IconHelp size={20} stroke={1.5} />
      <Text style={{ marginLeft: '10px' }}>Help</Text>
     </Box>
     <Box component="a" href="#" style={{ display: 'flex', flexDirection: "column", alignItems: 'center', padding: '8px', color: 'white', textDecoration: 'none', '&:hover': { backgroundColor: '#f0f0f0' } }}>
      <IconHelp size={20} stroke={1.5} />
       <Text style={{ marginLeft: '10px' }}>Help</Text>
    </Box>
  </Group>

        {/* Purple Scrollbar */}
        <style jsx global>{`
          ::-webkit-scrollbar {
            width: 8px;
          }
          ::-webkit-scrollbar-track {
            background: #1e1e2f;
          }
          ::-webkit-scrollbar-thumb {
            background: #8a2be2;
            border-radius: 10px;
          }
          ::-webkit-scrollbar-thumb:hover {
            background: #6a0dad;
          }
        `}</style>
      </AppShell.Section>

      {/* Bottom Section */}
      <AppShell.Section>
        <Text size="lg" weight={800} style={{ marginTop: '30px', color: 'white', marginLeft: '20px' }}>
          <svg xmlns="http://www.w3.org/2000/svg" width="34" height="34" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path d="M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0" />
            <path d="M12 17l0 .01" />
            <path d="M12 13.5a1.5 1.5 0 0 1 1 -1.5a2.6 2.6 0 1 0 -3 -4" />
          </svg>
        </Text>
      </AppShell.Section>
    </AppShell>
  );
};

export default Sidebar;
