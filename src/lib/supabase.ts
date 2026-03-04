import { createClient } from '@supabase/supabase-js'

const url = 'https://jspchtyovxlpzgbywifs.supabase.co'
const anonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImpzcGNodHlvdnhscHpnYnl3aWZzIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjA1MTI1NzEsImV4cCI6MjA3NjA4ODU3MX0.E5HbRAUarb0s8nIK8zB0hO2L54XBjE9XlaiYtiGxzt0'
export const supabase = createClient(url, anonKey)
