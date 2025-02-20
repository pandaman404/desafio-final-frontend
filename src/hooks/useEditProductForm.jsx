import { useMutation } from '@tanstack/react-query';
import { updateProduct } from '../api/services/productService';
import useAuthContext from './useAuthContext';
import useLoadCategories from './useLoadCategories';
import useLoadProductInfo from './useLoadProductInfo';

const initialValues = {
  sku: '',
  title: '',
  subtitle: '',
  categoryId: 0,
  price: 0,
  active: false,
  description: '',
  featured: false,
  stock: 0,
  url_image: '',
};

const useEditProductForm = (id) => {
  const { token } = useAuthContext();
  const { product, productError, productIsLoading } = useLoadProductInfo(id);
  const { categories, categoriesError, categoriesIsLoading } = useLoadCategories();

  const mutation = useMutation({
    mutationFn: ({ id, values }) => updateProduct({ id, values, token }),
    onSuccess: () => {},
    onError: (error) => {
      console.error('Error al actualizar producto', error);
    },
  });

  const handleSubmit = async (id, values) => {
    try {
      await mutation.mutateAsync({ id, values });
    } catch (error) {
      console.log(error);
    }
  };

  return {
    initialValues,
    handleSubmit,
    product,
    productError,
    productIsLoading,
    categories,
    categoriesError,
    categoriesIsLoading,
  };
};
export default useEditProductForm;
