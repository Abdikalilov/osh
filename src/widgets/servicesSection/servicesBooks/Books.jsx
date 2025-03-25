import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { GoArrowUpRight, GoArrowDownLeft } from "react-icons/go";
import './books.scss';

const Books = ({ title, description, id, setVisible, isVisible }) => { 
    const isOpen = isVisible === id; 

    return (
        <div>
            <div 
                onClick={() => setVisible(isOpen ? null : id)}
                style={{
                    backgroundColor: '#105B60',
                    width: 1319,
                    padding: '1.2rem',
                }} 
                className='container books-enemy'
            >
                <div className=' container services_title_block'> 
                    <div>
                        <h3 className='services_id'>{id}/ </h3>
                    </div>  
                    <div>
                        <h3 className="services_title">{title}</h3>
                    </div>  
                    <div>
                        <button className='services_btn'>
                            <motion.div 
                                animate={{ rotate: isOpen ? 180 : 0 }} 
                                transition={{ duration: 0.3 }}
                            >
                                <GoArrowUpRight />
                            </motion.div>
                        </button>
                    </div> 
                </div>
            </div>

            <AnimatePresence mode="wait">       
                {isOpen && (
                    <motion.div 
                    onClick={() => setVisible(isOpen ? null : id)}
                        className='container block'
                        initial={{ height: 0 }}  
                        animate={{ height: 'auto' }}    
                        exit={{ height: 0 }} 
                        style={{overflow: 'hidden'}}
                        transition={{ duration: 0.3 }} 
                    >
                        <div className='services-img '  onClick={() => setVisible(isOpen ? null : id)}></div>
                        
                        <div>
                            <p   onClick={() => setVisible(isOpen ? null : id)} className='services-text'>{description}</p>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}

export default Books;
