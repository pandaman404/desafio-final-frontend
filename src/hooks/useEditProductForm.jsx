import { useMutation, useQueryClient } from '@tanstack/react-query';
import { updateProduct } from '../api/services/productService';
import useAuthContext from './useAuthContext';
import useLoadProductInfo from './useLoadProductInfo';
import { useNavigate } from 'react-router-dom';
import { toast } from 'sonner';

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
  const queryClient = useQueryClient();
  const navigate = useNavigate();
  const { product, productError, productIsLoading } = useLoadProductInfo(id);

  const mutation = useMutation({
    mutationFn: ({ id, values }) => updateProduct({ id, values, token }),
    onSuccess: (response) => {
      queryClient.invalidateQueries(['products']);
      toast.success(response?.msg);
      navigate('/backoffice/inventario');
    },
    onError: (error) => {
      console.error('Error al actualizar producto', error);
      toast.error('Error al actualizar producto');
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
  };
};
export default useEditProductForm;
