export type OwnerId = number;

export type Owner = {
    id: OwnerId;
    avatar_url: string;
};

export type RepositoryId = number;

export type Repository = {
    id: RepositoryId;
    full_name: string;
    owner: Owner;
    description: string;
    html_url: string;
    stargazers_count: number;
    forks_count: number;
    open_issues_count: number;
}
