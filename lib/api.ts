import axios from 'axios';
import type { Note, NewNote } from '@/types/note';

export interface FetchNotesResponse {
  notes: Note[];
  totalPages: number;
}

export interface FetchNotesParams {
  page?: number;
  perPage?: number;
  search?: string;
}

const BASE_URL = 'https://notehub-public.goit.study/api/notes';

const getAuthHeaders = () => {
  const token = process.env.NEXT_PUBLIC_NOTEHUB_TOKEN;
  return {
    Authorization: `Bearer ${token}`,
  };
};

export const fetchNotes = async (
  params: FetchNotesParams = {}
): Promise<FetchNotesResponse> => {
  const response = await axios.get<FetchNotesResponse>(BASE_URL, {
    params: {
      page: params.page ?? 1,
      perPage: params.perPage ?? 12,
      search: params.search || undefined,
    },
    headers: getAuthHeaders(),
  });
  return response.data;
};

export const fetchNoteById = async (id: string): Promise<Note> => {
  const response = await axios.get<Note>(`${BASE_URL}/${id}`, {
    headers: getAuthHeaders(),
  });
  return response.data;
};

export const createNote = async (newNote: NewNote): Promise<Note> => {
  const response = await axios.post<Note>(BASE_URL, newNote, {
    headers: getAuthHeaders(),
  });
  return response.data;
};

export const deleteNote = async (id: string): Promise<Note> => {
  const response = await axios.delete<Note>(`${BASE_URL}/${id}`, {
    headers: getAuthHeaders(),
  });
  return response.data;
};
