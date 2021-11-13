import CreatePostDto from './dto/createPost.dto';
import UpdatePostDto from './dto/updatePost.dto';
import Post from './post.entity';
import { Repository } from 'typeorm';
export default class PostsService {
    private postsRepository;
    constructor(postsRepository: Repository<Post>);
    getAllPosts(): Promise<Post[]>;
    getPostById(id: number): Promise<Post>;
    updatePost(id: number, post: UpdatePostDto): Promise<Post>;
    createPost(post: CreatePostDto): Promise<Post>;
    deletePost(id: number): Promise<void>;
}
