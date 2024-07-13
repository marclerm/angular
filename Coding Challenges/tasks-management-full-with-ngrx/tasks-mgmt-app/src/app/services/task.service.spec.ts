import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { TaskService } from './task.service';

describe('TaskService', () => {
  let service: TaskService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [TaskService]
    });
    service = TestBed.inject(TaskService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  it('should retrieve tasks from the API', () => {
    const dummyTasks = [
      { id: '1', title: 'Task 1' },
      { id: '2', title: 'Task 2' }
    ];

    service.getTasks().subscribe(tasks => {
      expect(tasks.length).toBe(2);
      expect(tasks).toEqual(dummyTasks);
    });

    const req = httpMock.expectOne(`${service['apiUrl']}/tasks`);
    expect(req.request.method).toBe('GET');
    req.flush(dummyTasks);
  });

  afterEach(() => {
    httpMock.verify();
  });
});
