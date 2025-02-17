import { FaSignOutAlt } from 'react-icons/fa';
import { Button } from '../ui/button';
import { useAppDispatch } from '@/redux/hooks';
import { logout } from '@/redux/features/auth/authSlice';
import { useNavigate } from 'react-router';

interface IProps {
  isText?: boolean;
}
const LogoutButton = ({ isText }: IProps) => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const handleLogout = async () => {
    dispatch(logout());
    navigate('/');
  };

  return (
    <>
      {!isText ? (
        <Button
          onClick={handleLogout}
          className="flex items-center space-x-2"
        >
          <FaSignOutAlt />
          <span className="hidden md:block">Logout</span>
        </Button>
      ) : (
        <Button
          onClick={handleLogout}
          className="flex items-center space-x-2"
        >
          <FaSignOutAlt />
          <span>Logout</span>
        </Button>
      )}
    </>
  );
};

export default LogoutButton;
