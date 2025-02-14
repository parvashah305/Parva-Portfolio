import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import Homeroutes from "./Homeroutes";
import Resumeroutes from "./Resumeroutes";
import Projectroutes from "./Projectroutes";
import Contactroutes from "./Contactroutes";


function App() {
  const location = useLocation();

  const fadeVariants = {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    exit: { opacity: 0 },
  };

  const fadeTransition = {
    duration: 0.5, 
    ease: "easeInOut", 
  };

  return (
    <div
      className="min-h-screen"
      style={{
        backgroundColor: "rgb(229 231 235 / var(--tw-bg-opacity, 1))", 
      }}
    >
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          
          <Route
            path="/"
            element={
              <motion.div
                className="min-h-screen"
                variants={fadeVariants}
                initial="initial"
                animate="animate"
                exit="exit"
                transition={fadeTransition}
              >
                <Homeroutes />
              </motion.div>
            }
          />

        
          <Route
            path="/resume"
            element={
              <motion.div
                className="min-h-screen"
                variants={fadeVariants}
                initial="initial"
                animate="animate"
                exit="exit"
                transition={fadeTransition}
              >
                <Resumeroutes />
              </motion.div>
            }
          />

       
          <Route
            path="/projects"
            element={
              <motion.div
                className="min-h-screen"
                variants={fadeVariants}
                initial="initial"
                animate="animate"
                exit="exit"
                transition={fadeTransition}
              >
                <Projectroutes />
              </motion.div>
            }
          />

        
          <Route
            path="/contact"
            element={
              <motion.div
                className="min-h-screen"
                variants={fadeVariants}
                initial="initial"
                animate="animate"
                exit="exit"
                transition={fadeTransition}
              >
                <Contactroutes />
              </motion.div>
            }
          />
        </Routes>
      </AnimatePresence>
    </div>
  );
}

export default App;