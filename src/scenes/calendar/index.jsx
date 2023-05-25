import { useState } from "react";
import FullCalendar,{formatDate} from "@fullcalendar/react"
import interactionPlugin from "@fullcalendar/interaction"
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import listPlugin from '@fullcalendar/list';
import {Box,List,ListItem,ListItemText,Typography,useTheme}from "@mui/material";