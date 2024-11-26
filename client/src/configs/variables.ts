import adobeFlash from '../assets/img/skills/icons8-adobe-flash-48.png';
import angular from '../assets/img/skills/icons8-angularjs-48.png';
import css from '../assets/img/skills/icons8-css-48.png';
import express from '../assets/img/skills/icons8-express-js-48-bkgr.png';
import html from '../assets/img/skills/icons8-html5-48.png';
import javascript from '../assets/img/skills/icons8-javascript-48.png';
import typescript from '../assets/img/skills/icons8-typescript-48.png';
import mySql from '../assets/img/skills/icons8-mysql-48.png';
import node from '../assets/img/skills/icons8-node-js-48.png';
import php from '../assets/img/skills/icons8-php-48.png';
import react from '../assets/img/skills/icons8-react-48.png';
import redux from '../assets/img/skills/icons8-redux-48.png';
import jquery from '../assets/img/skills/icons8-jquery-48.png';
import sass from '../assets/img/skills/icons8-sass-48.png';
import photoshop from '../assets/img/skills/icons8-photoshop-48.png';

import { SkillType } from './types';
import { HTMLReactParserOptions } from 'html-react-parser';
import { Element } from 'domhandler/lib/node';
import SkillCtn from '../components/SkillCtn/Index';

export const Skill: SkillType[] = [
    { name: "JavaScript", image: javascript },  
    { name: "TypeScript", image: typescript }, 
    { name: "React", image: react },  
    { name: "Angular", image: angular }, 
    { name: "Node.JS", image: node }, 
    { name: "Express.JS", image: express }, 
    { name: "HTML", image: html }, 
    { name: "CSS", image: css }, 
    { name: "Sass", image: sass },  
    { name: "MySQL", image: mySql}, 
    { name: "Redux", image: redux },  
    { name: "jQuery", image: jquery },
    { name: "PHP", image: php }, 
    { name: "Photoshop", image: photoshop }, 
    { name: "Adobe Flash", image: adobeFlash },
];

export const optionSkills: HTMLReactParserOptions = {
    replace(domNode) {
        if (domNode as Element && 
            domNode.type === "tag"
        ){
            
            if (Object.keys(domNode.attribs)[0] === "name") {
                const skill = domNode.attribs.name;
                return SkillCtn({skill});
            }
        }
    }
}