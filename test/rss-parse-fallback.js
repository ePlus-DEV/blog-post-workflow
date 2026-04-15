import { DEFAULT_TEST_ENV } from './testUtils/default-env.js';
import { runAndCompareSnap } from './testUtils/testUtils.js';

describe('Readme generated with malformed xml fallback', () => {
	it('should match the snapshot', async () => {
		const envObj = {
			...process.env,
			...DEFAULT_TEST_ENV,
			INPUT_FEED_LIST: 'http://localhost:8080/malformed-xml',
			INPUT_RETRY_COUNT: '5',
		};
		await runAndCompareSnap('Readme.malformed-xml.md', envObj);
	}).timeout(20 * 1000);
});
