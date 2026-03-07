import os
import re

directories = ['/Users/rishabhrishabh/Downloads/onsective/pages', '/Users/rishabhrishabh/Downloads/onsective/components']

replacements = [
    (r'\btext-white/30\b', 'text-white/70'),
    (r'\btext-white/40\b', 'text-white/80'),
    (r'\btext-white/50\b', 'text-white/90'),
    (r'\btext-slate-400\b', 'text-slate-600'),
    (r'\btext-slate-500\b', 'text-slate-700'),
    (r'\bgray-400\b', 'gray-300'),
    (r'\bgray-500\b', 'gray-600'),
    (r'\btext-\[9px\]\b', 'text-xs'),
    (r'\btext-\[10px\]\b', 'text-xs'),
    (r'\btext-\[11px\]\b', 'text-sm'),
]

for d in directories:
    if os.path.exists(d):
        for root, _, files in os.walk(d):
            for f in files:
                if f.endswith('.tsx') or f.endswith('.ts'):
                    path = os.path.join(root, f)
                    with open(path, 'r') as file:
                        content = file.read()
                    
                    new_content = content
                    for old, new in replacements:
                        new_content = re.sub(old, new, new_content)
                    
                    if content != new_content:
                        with open(path, 'w') as file:
                            file.write(new_content)
                        print(f"Updated {path}")
