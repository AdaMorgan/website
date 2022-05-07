import styled from "styled-components";
import { motion } from 'framer-motion'

export const StyledHome = styled(motion.div)`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 50px;
    h2 {
        font-style: normal;
        font-weight: 600;
        font-size: 60px;
        line-height: 101px;
        color: #FFFFFF;
        mix-blend-mode: normal;
    }
    h3 {
        font-style: normal;
        font-weight: normal;
        font-size: 32px;
        line-height: 57px;
        color: #6E6E6E;
    }
`