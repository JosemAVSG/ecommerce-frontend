import React from 'react';
import styles from '@/styles/shopingcart.module.scss';
interface BadgeProps {
  children: React.ReactNode;
  color: string;
  count: number;
}

const Badge: React.FC<BadgeProps> = ({ children, color, count }) => {

  return (
    <div style={{ position: 'relative', display: 'inline-block' }}>
      {children}
      <span className={`${styles.badge}`} style={{ backgroundColor: color }} >
        {count}
      </span>
    </div>
  );
}

export default Badge;
