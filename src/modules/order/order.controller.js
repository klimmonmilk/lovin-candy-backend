import { Order } from "./order.model"



export const createOrder = async(req, res, next) => {
    try {
        const order = await Order.find()
        return res.status(200).json({
            success: true,
            data: order,
        });
    } catch (error) {
        return next(error);
    }
};


