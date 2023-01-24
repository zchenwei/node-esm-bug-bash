import {
  ThemeProvider,
  SliderField,
  Expander,
  ExpanderItem,
  Menu,
  MenuItem,
  Tabs,
  TabItem,
} from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';

const App = () => {
  return (
    // test direction="rtl" on ThemeProvider
    <ThemeProvider direction="rtl">
      <SliderField label="Slider" max={100} />
      <Expander type="single">
        <ExpanderItem title="Is it accessible?" value="demo-item-1">
          Yes! It adheres to the WAI-ARAI design pattern.
        </ExpanderItem>
        <ExpanderItem title="Can I customize the styling?" value="demo-item-2">
          Of course! See the section on CSS Styling below.
        </ExpanderItem>
        <ExpanderItem
          title="Is it a great way to organize content?"
          value="demo-item-3"
        >
          Most definitely!
        </ExpanderItem>
      </Expander>
      <Menu>
        <MenuItem>Option 1</MenuItem>
        <MenuItem>Option 2</MenuItem>
        <MenuItem>Option 3</MenuItem>
      </Menu>
      <Tabs justifyContent="flex-start">
        <TabItem title="Tab 1">Tab content #1</TabItem>
        <TabItem title="Tab 2">Tab content #2</TabItem>
        <TabItem title="Disabled" isDisabled={true}>
          Cannot clickP
        </TabItem>
      </Tabs>
    </ThemeProvider>
  );
};

export default App;
