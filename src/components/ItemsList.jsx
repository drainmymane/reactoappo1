import React from 'react';
import Items from './Items';
import { motion, AnimatePresence } from 'framer-motion';

const ItemsList = ({ items, title, remove,limit,page }) => {
    if (items.length !== 0) {
        return (
            <div>
                <h1 style={{ textAlign: 'center' }}>{title}</h1>
                <AnimatePresence>
                    {items.slice(0, page*limit).map((item, index) => (
                        <motion.div
                            key={item.id+index}
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: 20 }}
                            transition={{ duration: 0.2 }}
                            layout
                        >
                            <Items remove={remove} item={item} number={item.id} />
                        </motion.div>
                    ))}
                </AnimatePresence>
            </div>
        );
    }
    else {
        return (
            <div>
                <div style={{height:1400}}>list is clear</div>
            </div>
        );
    }
}

export default ItemsList;

// import { TransitionGroup, CSSTransition } from "react-transition-group";
// const nodeRefs = useRef({});
//     if (!items.length) {
//         return (
//             <div>list is clear</div>
//         );
//     }
//     return (
//         <div>
//             <h1 style={{ textAlign: 'center' }}>{title}</h1>
//             <TransitionGroup>
//                 {items.slice((page-1)*limit, page*limit).map((item, index) =>{
//                 if(!nodeRefs.current[item.id]){
//                     nodeRefs.current[item.id] = React.createRef();
//                 }
//                 return(
//                     <CSSTransition
//                         key={item.id}
//                         timeout={300}
//                         classNames="myitem"
//                         nodeRef={nodeRefs.current[item.id]}
//                     >   
//                         <div ref={nodeRefs.current[item.id]}>
//                             <Items  remove={remove} item={item} number={index + 1+ (page-1)*limit} />
//                         </div>
//                     </CSSTransition>
//                     );
//                 })}
//             </TransitionGroup>
//         </div>
//     );