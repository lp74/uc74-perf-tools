describe('Person', () => {
  const TIMEOUT = 1 * 60 * 1000;

  beforeEach(async () => {
    await page.goto('http://localhost:8080/class-vs-factory.html', {waitUntil: 'networkidle2'});
  });

  it('should profile the class', async () => {
    await page._client.send('HeapProfiler.collectGarbage');
    await page.tracing.start({path: './report/timeline-class.json'});
    await page.click('#person');
    await page._client.send('HeapProfiler.collectGarbage');
    await page.waitFor(500);
    await page.tracing.stop();
  }, TIMEOUT);

  it('should profile the factory', async () => {
    await page._client.send('HeapProfiler.collectGarbage');
    await page.tracing.start({path: './report/timeline-factory.json'});
    await page.click('#person-factory');
    await page._client.send('HeapProfiler.collectGarbage');
    await page.waitFor(500);
    await page.tracing.stop();
  }, TIMEOUT);
});
