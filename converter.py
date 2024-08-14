import csv
import json

def csv_to_typescript_quotes(csv_file, ts_file):
    # Read the CSV file
    with open(csv_file, 'r') as file:
        csv_reader = csv.DictReader(file)
        quotes = list(csv_reader)

    # Convert to a TypeScript-friendly format
    ts_quotes = json.dumps(quotes, indent=2)

    # Generate TypeScript interface and array
    ts_content = """interface Quote {
  Author: string;
  Quote: string;
}

const quotes: Quote[] = %s;

export default quotes;
""" % ts_quotes

    # Write to TypeScript file
    with open(ts_file, 'w') as file:
        file.write(ts_content)

    print(f"Conversion complete. TypeScript file created: {ts_file}")

# Usage
csv_to_typescript_quotes('quotes.csv', 'quotes.ts')