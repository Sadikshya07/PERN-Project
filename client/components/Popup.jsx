import Head from "next/head";
import { AiOutlineClose } from "react-icons/ai";
import { motion, AnimatePresence } from "framer-motion";

export default function Popup(props) {
  return (
    <AnimatePresence>
      {props.trigger ? (
        // <div className="popup-container">
        //   {isLandscape ? (
        //     <div>"This is Landscape"</div>
        //   ) : (
        //     <div>"This is portrait"</div>
        //   )}
        // </div>
        <motion.div
          initial={{
            opacity: 0,
          }}
          animate={{
            opacity: 1,
          }}
          exit={{
            opacity: 0,
          }}
          className={`popup-container transition-all h-[100vh] w-full fixed top-0 left-0 bg-[rgba(0,0,0,0.2)] flex justify-center items-center z-50`}
          onClick={() => props.setTrigger(false)}
        >
          <motion.div
            initial={{
              y: -200,
            }}
            animate={{
              y: 0,
            }}
            transition={{
              ease: "easeInOut",
              duration: 0.1,
            }}
            exit={{
              y: -200,
            }}
            className={`popup-modal relative mx-auto  bg-white ${props.height} ${props.width} rounded-xl p-1`}
            onClick={(e) => e.stopPropagation()}
          >
            <button>
              <AiOutlineClose
                className="absolute top-2 right-4 w-8"
                onClick={() => props.setTrigger(false)}
              />
            </button>
            {props.children}
          </motion.div>
        </motion.div>
      ) : (
        " "
      )}
    </AnimatePresence>
  );
}
