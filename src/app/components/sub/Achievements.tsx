import { motion, useMotionValue } from "motion/react";

interface AchievementsProps {
  index?: number;
  title: string;
  amount: number;
  children: React.ReactNode;
}

const Achievements = ({
  index,
  title,
  amount,
  children,
}: AchievementsProps) => {
  const number = useMotionValue(0);

  const count = (amount: number) => {
    let i = 0;
    const updateCount = () => {
      let timeOut;
      if (i <= amount) {
        number.set(i++);
        timeOut = setTimeout(updateCount, 0);
      } else {
        clearTimeout(timeOut);
      }
    };
    updateCount();
  };

  return (
    <div key={index} className="flex items-end gap-x-3">
      <span className="text-4xl lg:text-2xl text-gray-300 ">{children}</span>
      <h1 className="flex flex-col gap-y-2">
        <motion.span
          className="text-2xl lg:text-xl font-light text-yellow-500"
          onViewportEnter={() => count(amount)}
          viewport={{ once: true }}
        >
          {number}
        </motion.span>
        <span className="text-sm tracking-wide text-gray-500 dark:text-white transition-colors">
          {title}
        </span>
      </h1>
    </div>
  );
};

export default Achievements;
