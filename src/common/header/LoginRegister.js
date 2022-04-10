import * as React from 'react';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import { TabPanel } from '@material-ui/lab';
import Box from '@material-ui/core/Box';
import { TabContext } from '@material-ui/lab';

export default function LoginRegister() {
  const [value, setValue] = React.useState(0);

  // const handleChange = (event: React.SyntheticEvent, newValue: string) => {
  //   setValue(newValue);
  // };

  return (
    <TabContext value={value}>
      <Box sx={{ width: '100%' }}>
        <Tabs centered>
          <Tab value="one" label="Login" />
          <Tab value="two" label="Register" />
        </Tabs>

        <TabPanel value={value} index={0}>
          Item one
          Item one
          Item one
          Item one
        </TabPanel>
        <TabPanel value={value} index={1}>
          Item Two
        </TabPanel>

      </Box>
    </TabContext>
  );
}