import ForumUser from './forumUser';
import Reply from './reply';
import File from './file';
import SubForum from './subForum';

export default class Thread {
    id:number;
    dateOfCreation:Date;
    content:string;
    file:File;
    author:ForumUser;
    replies:Reply[];
    subForum:SubForum;    
    threadName:string;


}