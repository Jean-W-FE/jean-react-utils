import '@testing-library/jest-dom';
import { expect, afterEach } from 'vitest';
import { cleanup } from '@testing-library/react';
import matchers from '@testing-library/jest-dom/matchers';

// 扩展 Vitest 的 expect
expect.extend(matchers);

// 每个测试后清理
afterEach(() => {
  cleanup();
});