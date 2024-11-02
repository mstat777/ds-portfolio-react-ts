import common from '../../App.module.scss';

export default function Wrapper({type, commonClass, child}: {type: string, commonClass: string, child: any}){

    switch(type) {
        case "div": return ( 
            <div className={common[`${commonClass}`]}>
                {child}
            </div>
        )
        case "p": return ( 
            <p className={common[`${commonClass}`]}>
                {child}
            </p>
        )
    }
}