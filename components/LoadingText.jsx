import React from 'react';
import styles from './LoadingText.module.css';

const LoadingText = () => {
    const letters = 'Sinavita...'.split('');

    return (
        <div className={`bg-gradient-to-r from-yellow-500 to-orange-500 ${styles.loadingText}`}>
            {letters.map((char, index) => (
                <span
                    className={styles.letter}
                    key={index}
                    style={{ animationDelay: `${(index + 1) * 0.1}s` }}
                >
                    {char}
                </span>
            ))}
        </div>
    );
};

export default LoadingText;
