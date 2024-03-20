import toast from 'react-hot-toast';

export const toastFNC = (message, type) => {
  if (type === 'success') toast.success(message);
  if (type === 'error') toast.error(message);
  if (type === 'loading') toast.loading(message);
  if (type === 'blank') toast(message);
};
