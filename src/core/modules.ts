import { type ArchiveModule } from "../modules/archive";
import { type AuthorsModule } from "../modules/authors";
import { type CommentsModule } from "../modules/comments";
import { type FeedModule } from "../modules/feed";
import { type ImagesModule } from "../modules/images";
import { type LabelsModule } from "../modules/labels";
import { type PagesModule } from "../modules/pages";
import { type PostsModule } from "../modules/posts";
import { type SearchModule } from "../modules/search";
import { type StatsModule } from "../modules/stats";
import { type UrlModule } from "../modules/url";

export interface ClientModules {
	archive: ArchiveModule;
	authors: AuthorsModule;
	comments: CommentsModule;
	feed: FeedModule;
	images: ImagesModule;
	labels: LabelsModule;
	pages: PagesModule;
	posts: PostsModule;
	search: SearchModule;
	stats: StatsModule;
	url: UrlModule;
}
