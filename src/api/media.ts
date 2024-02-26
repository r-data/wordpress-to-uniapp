import { WORDPRESS_REST_API_URL } from '@/config'
import { deleteJSON, postUpload } from '@/api/utils'
import type { Media } from '@/types/media'

export const uploadMedia = ({ filePath }: { filePath: string }) =>
  postUpload<Media>(`${WORDPRESS_REST_API_URL}/media/`, filePath)

export const deleteMedia = ({ id, force = true }: { id: number; force?: boolean }) =>
  deleteJSON<{ deleted: boolean; previous: Media }>(`${WORDPRESS_REST_API_URL}/media/${id}`, {
    id,
    force
  })
