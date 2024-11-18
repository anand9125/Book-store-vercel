import React from 'react'
import { FiShoppingCart } from "react-icons/fi"
import { useParams } from "react-router-dom"
import { getImgUrl } from '../../utils/getImageUrl'
import { getSingleBookbyID } from '../../Recoil/books/bookApi'
import { useRecoilValue } from 'recoil'
import useCartAction from '../../componets/useCartAction'

const SingleBook = () => {
    const {id} = useParams();
    const book= useRecoilValue(getSingleBookbyID(id))
    const {addToCart}= useCartAction(book)
  return (
    <div className="max-w-lg shadow-md p-5">
            <h1 className="text-2xl font-bold mb-6">{book.title}</h1>

            <div className=''>
                <div>
                    <img
                        src={`${getImgUrl(book.coverImage)}`}
                        alt={book.title}
                        className="mb-8"
                    />
                </div>

                <div className='mb-5'>
                    <p className="text-gray-700 mb-2"><strong>Author:</strong> {book.author || 'admin'}</p>
                    <p className="text-gray-700 mb-4">
                        <strong>Published:</strong> {new Date(book?.createdAt).toLocaleDateString()}
                    </p>
                    <p className="text-gray-700 mb-4 capitalize">
                        <strong>Category:</strong> {book?.category}
                    </p>
                    <p className="text-gray-700"><strong>Description:</strong> {book.description}</p>
                </div>

                <button onClick={() => addToCart(book)} className="bg-primary rounded-md h-9 px-6 space-x-1 flex items-center gap-1 hover:bg-yellow-500 ">
                    <FiShoppingCart className="" />
                    <span>Add to Cart</span>

                </button>
            </div>
        </div>
  )
}

export default SingleBook