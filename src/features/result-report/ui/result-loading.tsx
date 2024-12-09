import { motion } from "framer-motion";

export const LoadingSpinner = () => {
  return (
    <motion.div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh",
      }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <motion.div
        style={{
          width: "5rem",
          height: "5rem",
          border: "0.25rem solid white",
          borderRadius: "50%",
          borderTopColor: "transparent",
        }}
        animate={{ rotate: 360 }}
        transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
      />
      <motion.p
        style={{
          marginTop: "1rem",
          color: "white",
          fontSize: "1.25rem",
        }}
        initial={{ y: 10, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.2 }}
      >
        회고를 생성하고 있어요...
      </motion.p>
    </motion.div>
  );
};

export const LoadingFeedback = () => {
  const dots = [".", "..", "..."];

  return (
    <motion.div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh",
      }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <motion.div
        style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}
      >
        {dots.map((dot, index) => (
          <motion.span
            key={index}
            style={{
              color: "white",
              fontSize: "1.5rem",
            }}
            initial={{ opacity: 0, y: 0 }}
            animate={{ opacity: 1, y: [-10, 0] }}
            transition={{
              duration: 0.5,
              repeat: Infinity,
              delay: index * 0.2,
            }}
          >
            {dot}
          </motion.span>
        ))}
      </motion.div>
      <motion.p
        style={{
          marginTop: "1rem",
          color: "white",
          fontSize: "1.25rem",
        }}
        initial={{ y: 10, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.2 }}
      >
        피드백을 작성하고 있어요
      </motion.p>
    </motion.div>
  );
};
