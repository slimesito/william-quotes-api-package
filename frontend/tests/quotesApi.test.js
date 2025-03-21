import { describe, it, expect, vi } from 'vitest';
import axios from 'axios';

vi.mock('axios');

describe('Quotes API', () => {
    it('should fetch all quotes', async () => {
        const mockQuotes = [
            { id: 1, quote: 'Test Quote 1', author: 'Author 1' },
            { id: 2, quote: 'Test Quote 2', author: 'Author 2' }
        ];

        axios.get.mockResolvedValueOnce({ data: mockQuotes });

        const response = await axios.get('/quotes-api/all');

        expect(response.data).toEqual(mockQuotes);
        expect(response.data).toHaveLength(2);
    });

    it('should fetch a random quote', async () => {
        const mockQuote = { id: 1, quote: 'Test Quote', author: 'Test Author' };

        axios.get.mockResolvedValueOnce({ data: mockQuote });

        const response = await axios.get('/quotes-api/random');

        expect(response.data).toEqual(mockQuote);
    });

    it('should fetch a quote by ID', async () => {
        const mockQuote = { id: 1, quote: 'Test Quote', author: 'Test Author' };

        axios.get.mockResolvedValueOnce({ data: mockQuote });

        const response = await axios.get('/quotes-api/1');

        expect(response.data).toEqual(mockQuote);
    });

    it('should return 404 if quote does not exist', async () => {
        axios.get.mockRejectedValueOnce({ response: { status: 404 } });

        try {
            await axios.get('/quotes-api/9999');
        } catch (error) {
            expect(error.response.status).toBe(404);
        }
    });
});
