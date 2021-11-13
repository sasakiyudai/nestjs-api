import PostsService from './posts.service';
import CreatePostDto from './dto/createPost.dto';
import UpdatePostDto from './dto/updatePost.dto';
import FindOneParams from 'src/utils/findOneParams';
export default class PostsController {
    private readonly postsService;
    constructor(postsService: PostsService);
    getAllPosts(): Promise<import("./post.entity").default[]>;
    getPostById({ id }: FindOneParams): Promise<import("./post.entity").default>;
    createPost(post: CreatePostDto): Promise<import("./post.entity").default>;
    updatePost(id: string, post: UpdatePostDto): Promise<import("./post.entity").default>;
    deletePost(id: string): Promise<void>;
}
