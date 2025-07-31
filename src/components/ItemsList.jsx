import React from 'react';
import Items from './Items';
import { motion, AnimatePresence } from 'framer-motion';

const ItemsList = ({ items, title, remove,limit,page }) => {
    if (items.length !== 0) {
        return (
            <div>
                <h1 style={{ textAlign: 'center' }}>{title}</h1>
                <AnimatePresence>
                    {items.slice((page-1)*limit, page*limit).map((item, index) => (
                        <motion.div
                            key={item.id}
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: 20 }}
                            transition={{ duration: 0.2 }}
                            layout
                        >
                            <Items remove={remove} item={item} number={index + 1+ (page-1)*limit} />
                        </motion.div>
                    ))}
                </AnimatePresence>
            </div>
        );
    }
    else {
        return (
            <div>
                <div>list is clear</div>
            </div>
        );
    }
}

export default ItemsList;