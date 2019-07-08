import Thread from './thread';
import Reply from './reply';
import Forum from './forum';
import ForumUserRole from './forumUserRole';

export default class ForumUser {
    id:number;
    forum:Forum;
    registeredUser:any;
    startedThreads:Thread[];
    replies:Reply[];
    roles:ForumUserRole[];
}