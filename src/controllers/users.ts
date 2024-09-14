import { Request, Response } from "express";
import { AddressSchema } from "../schemas/users";
import { NotFoundException } from "../exceptions/not-found";
import { ErrorCode } from "../exceptions/root";
import { prismaClient } from "..";



export const addADdress = async (req:any, res:Response) => {
    AddressSchema.parse(req.body)
    // let user: user;
    // try {
    //     user = await prismaClient.user.findFirstOrThrow({
    //         where:{
    //             id: req.body.userId
    //         }
    //     })
    // } catch (err) {
    //     throw new NotFoundException(' User not Found', ErrorCode.USER_NOT_FOUND)
    // }

    const address = await prismaClient.address.create({
        data:{
            ...req.body,
            userId:req.user.id
        }
    })
    res.json(address)
}

export const deleteADdress = async (req:Request, res:Response) => {
    try {
        const id = parseInt(req.params.id, 10);
        await prismaClient.address.delete({
            where:{
                id
            }
        })
        res.json ({Success: true})
    } catch (err) {
        throw new NotFoundException('Address not found', ErrorCode.ADDRESS_NOT_FOUND)
    }
}

export const listADdress = async (req:any, res:Response) => {
    const address = await prismaClient.address.findMany({
        where:{
            userId: req.user.id
        }
    })
    res.json(address)
}