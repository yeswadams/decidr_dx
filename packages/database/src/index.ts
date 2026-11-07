/** Persistence ownership boundary. Select a database and schema strategy when requirements are known. */
export interface DatabaseConfiguration {
  readonly connectionString: string;
}
