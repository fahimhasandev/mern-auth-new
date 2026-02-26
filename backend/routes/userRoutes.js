import { Router } from 'express';
import { userController } from '../controllers/userController.js';
import { protect } from '../middleware/authMiddleware.js';

const router = Router();

router.post('/', userController.registerUser);
router.post('/auth', userController.authUser);
router.post('/logout', userController.logoutUser);

router.route('/profile').get(protect, userController.getUserProfile).put(protect, userController.updateUserProfile);
export const userRoutes = router;
