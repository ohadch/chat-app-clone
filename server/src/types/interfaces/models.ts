import {Document, Model, Types} from "mongoose";

export interface EnhancedDocuments extends Document {
    _doc: Document,
}

export interface IUserDocument extends EnhancedDocuments {
    firstName: string;
    lastName: string;
    email: string;
    nickname: string;
    status: string;
    lastSeen: string;
    activeSocketId: string
    isOnline: boolean;
}

export interface IUserModel extends Model<IUserDocument> {
    findByEmail(email: string): IUserDocument | null;
    findBySocketId(socketId: string): IUserDocument | null;
}

export interface IMessageDocument extends EnhancedDocuments {
    text: string,
    sender: string,
    recipient: string,
    sentAt?: string,
    receivedAt?: string,
    seenAt?: string
    saveOnParticipant(): Promise<any>
    saveOnParticipants(): Promise<any>
}

export type IMessageModel = Model<IMessageDocument>

export interface IConversationDocument extends EnhancedDocuments {
    user: IUserDocument;
    contact: IUserDocument;
    messages: IMessageDocument[]
}

export interface IConversationModel extends Model<IConversationDocument> {
    getOrCreate(userId: Types.ObjectId, contactId: Types.ObjectId): Promise<IConversationDocument>;
}
