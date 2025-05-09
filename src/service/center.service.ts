import { createCenterDto, udpateCenterDto } from "../dto/center.dto";
import { createCenter, destroyCenter, getAllCenters, getCenterById, updateCenter } from "../repositories/center.repository";

export const createCenterService = async (user: createCenterDto) => {
    try {
        const newUser = await createCenter(user);
        return newUser;
    } catch (error) {
        throw error
    }
}

export const updateCenterService = async (centerId: number, payload: udpateCenterDto) => {
    try {
        const updatedCenter = await updateCenter(centerId, payload);
        return updatedCenter;
    } catch (error) {
        throw error
    }
}

export const destroyCenterService = async (centerId: number) => {
    try {
        await destroyCenter(centerId);
    } catch (error) {
        throw error
    }
}

export const getCenterByIdService = async (centerId: number) => {
    try {
        const center = await getCenterById(centerId);
        return center;
    } catch (error) {
        throw error
    }
}

export const getAllCentersService = async () => {
    try {
        const centers = await getAllCenters();
        return centers;
    } catch (error) {
        throw error;
    }
}