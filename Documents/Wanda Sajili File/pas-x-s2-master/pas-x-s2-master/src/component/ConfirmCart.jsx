// RDX
import { useSelector, useDispatch } from 'react-redux'
import { deleteProduct } from '../features/Products/cartSlice'
import { refreshProduct } from '../features/Products/ProductsSlice'
import { changeIsConf } from '../features/Products/confirmCart'

// FM
import { motion } from 'framer-motion'
import { refreshStokFav } from '../features/Products/favSclice'

const ConfirmCart = () => {
  const dispatch = useDispatch()

  const data = useSelector(state => state.confirmCart.data) 

  const hdlDelete = () => {
    dispatch(deleteProduct(data))
    dispatch(refreshStokFav(data))
    dispatch(refreshProduct(data))
    dispatch(changeIsConf())
  }

  return (
    <div
      className="w-full h-screen bg-black/50 fixed top-1/2 -translate-y-1/2 right-1/2 translate-x-1/2 z-50 flex items-center justify-center">
      <motion.div
        initial={{scale: .3}}
        animate={{scale: 1}}
        transition={{type: 'spring', damping: 8, stiffness: 100}}
      className=" bg-white rounded-2xl flex flex-col items-center justify-center px-8 py-7 gap-5 ">
      <div className="bg-red-500/40 flex justify-center items-center w-[120px] p-4 rounded-full">
        <svg className="fill-black cursor-pointer dark:fill-HDark self-end w-full h-full]"  viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <g clipPath="url(#clip0_403_3137)">
          <path d="M20.9999 4H17.8999C17.6678 2.87141 17.0537 1.85735 16.1611 1.12872C15.2686 0.40009 14.1521 0.00145452 12.9999 0L10.9999 0C9.84767 0.00145452 8.7312 0.40009 7.83863 1.12872C6.94606 1.85735 6.33197 2.87141 6.09988 4H2.99988C2.73466 4 2.48031 4.10536 2.29277 4.29289C2.10523 4.48043 1.99988 4.73478 1.99988 5C1.99988 5.26522 2.10523 5.51957 2.29277 5.70711C2.48031 5.89464 2.73466 6 2.99988 6H3.99988V19C4.00147 20.3256 4.52876 21.5964 5.4661 22.5338C6.40344 23.4711 7.67428 23.9984 8.99988 24H14.9999C16.3255 23.9984 17.5963 23.4711 18.5337 22.5338C19.471 21.5964 19.9983 20.3256 19.9999 19V6H20.9999C21.2651 6 21.5194 5.89464 21.707 5.70711C21.8945 5.51957 21.9999 5.26522 21.9999 5C21.9999 4.73478 21.8945 4.48043 21.707 4.29289C21.5194 4.10536 21.2651 4 20.9999 4ZM10.9999 2H12.9999C13.6202 2.00076 14.225 2.19338 14.7315 2.55144C15.238 2.90951 15.6213 3.41549 15.8289 4H8.17088C8.37846 3.41549 8.76178 2.90951 9.26826 2.55144C9.77475 2.19338 10.3796 2.00076 10.9999 2ZM17.9999 19C17.9999 19.7956 17.6838 20.5587 17.1212 21.1213C16.5586 21.6839 15.7955 22 14.9999 22H8.99988C8.20423 22 7.44117 21.6839 6.87856 21.1213C6.31595 20.5587 5.99988 19.7956 5.99988 19V6H17.9999V19Z" />
          <path d="M10 17.9994C10.2652 17.9994 10.5196 17.894 10.7071 17.7065C10.8946 17.5189 11 17.2646 11 16.9994V10.9994C11 10.7342 10.8946 10.4798 10.7071 10.2923C10.5196 10.1047 10.2652 9.99939 10 9.99939C9.73478 9.99939 9.48043 10.1047 9.29289 10.2923C9.10536 10.4798 9 10.7342 9 10.9994V16.9994C9 17.2646 9.10536 17.5189 9.29289 17.7065C9.48043 17.894 9.73478 17.9994 10 17.9994Z" />
          <path d="M13.9999 17.9994C14.2651 17.9994 14.5195 17.894 14.707 17.7065C14.8945 17.5189 14.9999 17.2646 14.9999 16.9994V10.9994C14.9999 10.7342 14.8945 10.4798 14.707 10.2923C14.5195 10.1047 14.2651 9.99939 13.9999 9.99939C13.7347 9.99939 13.4803 10.1047 13.2928 10.2923C13.1052 10.4798 12.9999 10.7342 12.9999 10.9994V16.9994C12.9999 17.2646 13.1052 17.5189 13.2928 17.7065C13.4803 17.894 13.7347 17.9994 13.9999 17.9994Z" />
          </g>
          <defs>
          <clipPath id="clip0_403_3137">
          <rect width="26" height="26" fill="white"/>
          </clipPath>
          </defs>
        </svg>
      </div>
      <h1 className="text-2xl text-gray-700 ">Apakah Anda Yakin?</h1>
      <p className="text-center text-gray-500">apakah anda yakin ingin menghapus <br /> <span className="text-red-500">{data.name}</span> dari daftar keranjang </p>
      <div className="flex w-full gap-1">
        <button className="w-1/2 bg-red-600 hover:bg-red-500 transition-colors duration-150 rounded-sm text-white py-2" onClick={() => hdlDelete()}>Delete</button>
        <button className="w-1/2 bg-gray-500 hover:bg-gray-400 transition-colors duration-150 rounded-sm text-white py-2" onClick={() => dispatch(changeIsConf())} >Cancel</button>
      </div>
    </motion.div>
  </div>
  )
}

export default ConfirmCart