import PostsService from './posts.service';
import CreatePostDto from './dto/createPost.dto';
import UpdatePostDto from './dto/updatePost.dto';
export default class PostsController {
    private readonly postsService;
    constructor(postsService: PostsService);
    getAllPosts(): import("./post.interface").default[];
    getPostById(id: string): import("./post.interface").default;
    createPost(post: CreatePostDto): Promise<{
        content: string;
        title: string;
        id: number;
    }>;
    replacePost(id: string, post: UpdatePostDto): Promise<UpdatePostDto>;
    deletePost(id: string): Promise<void>;
}
