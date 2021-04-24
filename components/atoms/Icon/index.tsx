import * as React from 'react';
import {
    FaAngular,
    FaBootstrap,
    FaFacebook,
    FaGithub,
    FaInstagram,
    FaJava,
    FaJs,
    FaLaravel,
    FaLinkedin,
    FaNode,
    FaPhp,
    FaPython,
    FaReact,
    FaSymfony,
    FaTelegram,
    FaVuejs,
} from 'react-icons/fa'
import {AiOutlinePhone} from 'react-icons/ai'
import {DiCss3, DiDjango, DiFirebase, DiMongodb, DiMysql} from 'react-icons/di'
import {GrGraphQl} from 'react-icons/gr'
import {
    SiAdobeillustrator,
    SiAdobephotoshop,
    SiAdobexd,
    SiAnaconda,
    SiFigma,
    SiFlask,
    SiKeras,
    SiNextDotJs,
    SiNuxtDotJs,
    SiPytorch,
    SiSap,
    SiSocketDotIo,
    SiTensorflow,
    SiTypescript
} from 'react-icons/si'
import {GiArtificialIntelligence, GiPaintBrush} from 'react-icons/gi'
import {MdMailOutline} from 'react-icons/md'
import {IoIosDesktop} from "react-icons/io";

interface Props {
    size?: string
    className?: string
}

export const Icons = {
    'telegram': (props ?: Props): JSX.Element => <FaTelegram {...props}/>,
    'github': (props ?: Props): JSX.Element => <FaGithub {...props}/>,
    'facebook': (props ?: Props): JSX.Element => <FaFacebook {...props}/>,
    'instagram': (props ?: Props): JSX.Element => <FaInstagram {...props}/>,
    'linkedin': (props ?: Props): JSX.Element => <FaLinkedin {...props}/>,
    'vue': (props ?: Props): JSX.Element => <FaVuejs {...props}/>,
    'react': (props ?: Props): JSX.Element => <FaReact {...props}/>,
    'react native': (props ?: Props): JSX.Element => <FaReact {...props}/>,
    'angular': (props ?: Props): JSX.Element => <FaAngular {...props}/>,
    'bootstrap': (props ?: Props): JSX.Element => <FaBootstrap {...props}/>,
    'java': (props ?: Props): JSX.Element => <FaJava {...props}/>,
    'javascript': (props ?: Props): JSX.Element => <FaJs {...props}/>,
    'laravel': (props?: Props): JSX.Element => <FaLaravel {...props}/>,
    'node.js': (props ?: Props): JSX.Element => <FaNode {...props}/>,
    'php': (props?: Props): JSX.Element => <FaPhp {...props}/>,
    'python': (props?: Props): JSX.Element => <FaPython {...props}/>,
    'symfony': (props?: Props): JSX.Element => <FaSymfony {...props}/>,
    'css3': (props ?: Props): JSX.Element => <DiCss3 {...props}/>,
    'django': (props?: Props): JSX.Element => <DiDjango {...props}/>,
    'firebase': (props ?: Props): JSX.Element => <DiFirebase {...props}/>,
    'mongodb': (props ?: Props): JSX.Element => <DiMongodb {...props}/>,
    'sql': (props ?: Props): JSX.Element => <DiMysql {...props}/>,
    'graphql': (props ?: Props): JSX.Element => <GrGraphQl {...props}/>,
    'anaconda': (props ?: Props): JSX.Element => <SiAnaconda {...props}/>,
    'flask': (props ?: Props): JSX.Element => <SiFlask {...props}/>,
    'socket.io': (props ?: Props): JSX.Element => <SiSocketDotIo {...props}/>,
    'tensorflow': (props ?: Props): JSX.Element => <SiTensorflow{...props}/>,
    'pytorch': (props ?: Props): JSX.Element => <SiPytorch {...props}/>,
    'typescript': (props ?: Props): JSX.Element => <SiTypescript {...props}/>,
    'keras': (props ?: Props): JSX.Element => <SiKeras {...props}/>,
    'next': (props ?: Props): JSX.Element => <SiNextDotJs {...props}/>,
    'nuxt': (props ?: Props): JSX.Element => <SiNuxtDotJs {...props}/>,
    'pandas': (props ?: Props): JSX.Element => <GiArtificialIntelligence {...props}/>,
    'figma': (props ?: Props): JSX.Element => <SiFigma {...props}/>,
    'adobe xd': (props ?: Props): JSX.Element => <SiAdobexd {...props}/>,
    "photoshop": (props ?: Props): JSX.Element => <SiAdobephotoshop {...props}/>,
    "illustrator": (props ?: Props): JSX.Element => <SiAdobeillustrator {...props}/>,
    'sap': (props ?: Props): JSX.Element => <SiSap {...props}/>,
    'design': (props ?: Props): JSX.Element => <GiPaintBrush{...props} />,
    'web': (props ?: Props): JSX.Element => <IoIosDesktop {...props} />,
    'email': (props ?: Props): JSX.Element => <MdMailOutline {...props} />,
    "phone": (props ?: Props): JSX.Element => <AiOutlinePhone {...props} />
}
export const Icon: React.FC<any> = ({name, ...props}) => {
    return Icons[name] ? Icons[name](props) : null
}