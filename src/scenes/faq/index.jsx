import {Box,useTheme,Typography} from "@mui/material";
import Header from "../../components/Headers";
import Accordion from "@mui/material/Accordion";
import AccordianSummary from "@mui/material/AccordionSummary";
import AccordianDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { tokens } from "../../theme";

const FAQ=()=>{
    const theme=useTheme();
    const colors=tokens(theme.palette.mode);

    return(
        <Box m="20px">
            <Header title="FAQ" subtitle="Frequently asked Questions"/>
            <Accordion defaultExpanded >
                <AccordianSummary expandIcon={<ExpandMoreIcon/>}>
                    <Typography color={colors.greenAccent[500]}>
                        An Important Question
                    </Typography>
                </AccordianSummary>
                <AccordianDetails>
                    <Typography>
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatibus, doloremque ratione eos consequatur totam sunt assumenda. Ipsum possimus unde illo distinctio impedit ratione quae quisquam? Quia atque unde repellendus ducimus.
                    </Typography>
                </AccordianDetails>
            </Accordion>

            <Accordion defaultExpanded>
                <AccordianSummary expandIcon={<ExpandMoreIcon/>}>
                    <Typography color={colors.greenAccent[500]}>
                        An Important Question
                    </Typography>
                </AccordianSummary>
                <AccordianDetails>
                    <Typography>
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatibus, doloremque ratione eos consequatur totam sunt assumenda. Ipsum possimus unde illo distinctio impedit ratione quae quisquam? Quia atque unde repellendus ducimus.
                    </Typography>
                </AccordianDetails>
            </Accordion>

            <Accordion defaultExpanded>
                <AccordianSummary expandIcon={<ExpandMoreIcon/>}>
                    <Typography color={colors.greenAccent[500]}>
                        An Important Question
                    </Typography>
                </AccordianSummary>
                <AccordianDetails>
                    <Typography>
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatibus, doloremque ratione eos consequatur totam sunt assumenda. Ipsum possimus unde illo distinctio impedit ratione quae quisquam? Quia atque unde repellendus ducimus.
                    </Typography>
                </AccordianDetails>
            </Accordion>

            <Accordion defaultExpanded>
                <AccordianSummary expandIcon={<ExpandMoreIcon/>}>
                    <Typography color={colors.greenAccent[500]}>
                        An Important Question
                    </Typography>
                </AccordianSummary>
                <AccordianDetails>
                    <Typography>
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatibus, doloremque ratione eos consequatur totam sunt assumenda. Ipsum possimus unde illo distinctio impedit ratione quae quisquam? Quia atque unde repellendus ducimus.
                    </Typography>
                </AccordianDetails>
            </Accordion>

            <Accordion defaultExpanded>
                <AccordianSummary expandIcon={<ExpandMoreIcon/>}>
                    <Typography color={colors.greenAccent[500]}>
                        An Important Question
                    </Typography>
                </AccordianSummary>
                <AccordianDetails>
                    <Typography>
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatibus, doloremque ratione eos consequatur totam sunt assumenda. Ipsum possimus unde illo distinctio impedit ratione quae quisquam? Quia atque unde repellendus ducimus.
                    </Typography>
                </AccordianDetails>
            </Accordion>
        </Box>
    )
}

export default FAQ;