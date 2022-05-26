import React, { useState } from 'react';
import { useQuery } from 'react-query';
import Loading from '../SharedComponnets/Loading';
import ProductDeleteModal from './ProductDeleteModal';
import ProductRow from './ProductRow';

const ManageProducts = () => {
  const [deleteProduct, setDeleteProduct] = useState(null);
  const { data: products, isLoading, refetch } = useQuery('camera', () => fetch('https://serene-caverns-13504.herokuapp.com/camera')
    .then(res => res.json()))

  if (isLoading) {
    return <Loading />
  }

  return (
    <div>
      <div class="overflow-x-auto">
        <table class="table w-full mt-4">

          <thead>
            <tr className='text-center'>
              <th></th>
              <th>Product Name</th>
              <th>Price Per unit</th>
              <th>Avalable</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {
              products?.map((product, index) => <ProductRow
                key={product._id}
                index={index}
                product={product}
                setDeleteProduct={setDeleteProduct}
                refetch={refetch}
              ></ProductRow>
              )
            }

          </tbody>
        </table>
      </div>
      {
        deleteProduct && <ProductDeleteModal
          setDeleteProduct={setDeleteProduct}
          deleteProduct={deleteProduct}
          refetch={refetch}
        ></ProductDeleteModal>
      }
    </div>
  );
};

export default ManageProducts;