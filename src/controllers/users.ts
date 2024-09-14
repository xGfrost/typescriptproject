import { Request, Response } from "express";
import { AddressSchema } from "../schemas/users";
import { NotFoundException } from "../exceptions/not-found";
import { ErrorCode } from "../exceptions/root";
import { user } from '@prisma/client';
import { prismaClient } from "..";

export const addADdress = async (req:Request, res:Response) => {
    AddressSchema.parse(req.body)
    let user: user;
    try {
        user = await prismaClient.user.findFirstOrThrow({
            where:{
                id: req.body.userId
            }
        })
    } catch (err) {
        throw new NotFoundException(' User not Found', ErrorCode.USER_NOT_FOUND)
    }

    const address = await prismaClient.address.create({
        data:{
            ...req.body,
            userId:user.id
        }
    })
    res.json(address)
}

export const deleteADdress = async (req:Request, res:Response) => {
    
}

export const listADdress = async (req:Request, res:Response) => {
    
}