import Thread from './thread';
import ForumUser from './forumUser';

export default class Reply {
    id:number;
    content:string;
    forumThread:Thread;
    author:ForumUser;
    
}