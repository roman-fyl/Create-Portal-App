import { useNavigate } from 'react-router-dom';

export const useNavigation = () => useNavigate();

export const navigateTo = (navigate, path) => {
  navigate(path);
};