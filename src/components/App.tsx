import React from "react";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import AddIcon from '@material-ui/icons/Add';
import {
    AppBar,
    Button,
    Tabs,
    Tab,
    Box,
    Grid,
    Link,
    TextField,
    Typography,
    ExpansionPanel,
    ExpansionPanelSummary,
    ExpansionPanelDetails, Icon
} from "@material-ui/core";
import {AddTaskForm} from "./AddTaskForm"

function a11yProps(index: any) {
    return {
        id: `scrollable-auto-tab-${index}`,
        'aria-controls': `scrollable-auto-tabpanel-${index}`,
    };
}

interface TabPanelProps {
    children?: React.ReactNode;
    index: any;
    value: any;
}

const App: React.FC = () => {
    const [value, setValue] = React.useState(0);

    const handleChange = (event: React.ChangeEvent<{}>, newValue: number) => {
        setValue(newValue);
    };

    function TabPanel(props: TabPanelProps) {
        const {children, value, index, ...other} = props;

        return (
            <Typography
                component="div"
                role="tabpanel"
                hidden={value !== index}
                id={`scrollable-auto-tabpanel-${index}`}
                aria-labelledby={`scrollable-auto-tab-${index}`}
                {...other}
            >
                {value === index && <Box p={3}>{children}</Box>}
            </Typography>
        );
    }

    const preventDefault = (event: React.SyntheticEvent) => event.preventDefault();

    return (
        <>
            <AppBar position="static" color="default">
                <Tabs
                    value={value}
                    onChange={handleChange}
                    indicatorColor="primary"
                    textColor="primary"
                    variant="scrollable"
                    scrollButtons="auto"
                    aria-label="scrollable auto tabs example"
                >
                    <Tab label="Item One" {...a11yProps(0)} />
                    <Tab label="Item Two" {...a11yProps(1)} />
                    <Tab label="Item Three" {...a11yProps(2)} />
                    <form noValidate autoComplete="off">
                        <TextField
                            id="filled-secondary"
                            label="Filled secondary"
                            variant="filled"
                            color="secondary"
                        />
                    </form>
                    <Link href="#" onClick={preventDefault}>
                        <AddIcon/>
                    </Link>
                </Tabs>
            </AppBar>
            <TabPanel value={value} index={0}>
                <Grid container spacing={1}>
                    <Grid item xs={12}>
                        <Link href="#" onClick={preventDefault}>
                            <AddTaskForm />
                        </Link>
                    </Grid>
                </Grid>
                <Grid container spacing={1}>
                    <Grid item xs={9}>
                        <ExpansionPanel>
                            <ExpansionPanelSummary
                                expandIcon={<ExpandMoreIcon/>}
                                aria-controls="panel1a-content"
                                id="panel1a-header"
                            >
                                <Typography>Expansion Panel 1</Typography>
                            </ExpansionPanelSummary>
                            <ExpansionPanelDetails>
                                <Typography>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus
                                    ex,
                                    sit amet blandit leo lobortis eget.
                                </Typography>
                            </ExpansionPanelDetails>
                        </ExpansionPanel>
                    </Grid>
                    <Grid item xs={3}>
                        <Button color="primary">Primary</Button>
                    </Grid>
                </Grid>
                <Grid container spacing={1}>
                    <Grid item xs={9}>
                        <ExpansionPanel>
                            <ExpansionPanelSummary
                                expandIcon={<ExpandMoreIcon/>}
                                aria-controls="panel1a-content"
                                id="panel1a-header"
                            >
                                <Typography>Expansion Panel 1</Typography>
                            </ExpansionPanelSummary>
                            <ExpansionPanelDetails>
                                <Typography>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus
                                    ex,
                                    sit amet blandit leo lobortis eget.
                                </Typography>
                            </ExpansionPanelDetails>
                        </ExpansionPanel>
                    </Grid>
                    <Grid item xs={3}>
                        <Button color="primary">Primary</Button>
                        <Button color="secondary">Secondary</Button>
                    </Grid>
                </Grid>
            </TabPanel>
            <TabPanel value={value} index={1}>
                Item Two
            </TabPanel>
            <TabPanel value={value} index={2}>
                bo tak
            </TabPanel>
        </>
    );
};

export default App;
