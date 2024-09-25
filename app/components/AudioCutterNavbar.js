// components/AudioCutterNavbar.js
import { AppShell, Text, ScrollArea, Group, Box } from '@mantine/core';
import { IconHome, IconSettings, IconUser, IconHelp } from '@tabler/icons-react';

const AudioCutterNavbar = () => {
  return (
    <AppShell width={{ base: 300 }} p="sm">
      <AppShell.Section>
        <Text size="lg" weight={700} style={{ marginBottom: '20px', color: 'white' }}>
        <svg xmlns="http://www.w3.org/2000/svg" width="64" height="44" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-menu">
  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
  <path d="M4 8l16 0" />
  <path d="M4 16l16 0" />
</svg>
        </Text>
      </AppShell.Section>

      <AppShell.Section grow component={ScrollArea}>
        <Group direction="column" spacing="xs" style={{ padding: '0px' }}>
          <Box component="a" href="#" style={{ display: 'flex', flexDirection:"column",alignItems: 'center', padding: '0px', color: 'white', textDecoration: 'none', '&:hover': { backgroundColor: '#f0f0f0' } }}>
            <IconHome size={20} stroke={1.5} />
            <Text style={{ marginLeft: '10px' }}>Home</Text>
          </Box>
          <Box component="a" href="#" style={{ display: 'flex', flexDirection:"column", alignItems: 'center', padding: '0px', color: 'white', textDecoration: 'none', '&:hover': { backgroundColor: '#f0f0f0' } }}>
            <IconUser size={20} stroke={1.5} />
            <Text style={{ marginLeft: '10px' }}>Profile</Text>
          </Box>
          <Box component="a" href="#" style={{ display: 'flex', flexDirection:"column", alignItems: 'center', padding: '0px', color: 'white', textDecoration: 'none', '&:hover': { backgroundColor: '#f0f0f0' } }}>
            <IconSettings size={20} stroke={1.5} />
            <Text style={{ marginLeft: '10px' }}>Settings</Text>
          </Box>
          <Box component="a" href="#" style={{ display: 'flex', flexDirection:"column",alignItems: 'center', padding: '8px', color: 'white', textDecoration: 'none', '&:hover': { backgroundColor: '#f0f0f0' } }}>
            <IconHelp size={20} stroke={1.5} />
            <Text style={{ marginLeft: '10px' }}>Help</Text>
          </Box>
        </Group>
      </AppShell.Section>

     
    </AppShell>
  );
};

export default AudioCutterNavbar;
